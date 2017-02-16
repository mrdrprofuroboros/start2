from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.shortcuts import render_to_response
from django.views.generic import TemplateView
from django.conf import settings

from report.models import *
from report.rest import *
import json
import urllib

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

class ReportView(TemplateView):
    template_name = 'frontend/index.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(ReportView, self).get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        context['title'] = 'Report Test'
        context['app_path'] = 'TestApp2'
        context['app_name'] = 'TestApp2'
        context['settings'] = settings

        return context

def permissions(request):
    print request.user.user_permissions.all()
    return HttpResponse(json.dumps(
        {
            'is_superuser': request.user.is_superuser,
            'user_permissions': list(map(lambda x:str(x.codename), request.user.user_permissions.all()))
        }
    ), 'applicative/json')

def getCombobox3(request):
    if request.method == 'GET':
        options = Combobox3.objects.all()
        serializer = Combobox3Serializer(options, many=True)
        
        return JSONResponse(serializer.data)

def getFolderTree(request):
    if request.method == 'GET':
        root = FolderTreeNode.objects.get(is_root=True)

        def constructTree(node):
            d = {
                "text": node.name,
                "leaf": node.is_leaf,
            }
            if not node.is_leaf:
                children = [constructTree(n) for n in node.children.all()]
                d["children"] = children
            else:
                d["checked"] = False
            return d

        tree = constructTree(root)

        return JSONResponse(tree)

@csrf_protect
def data(request, id=None):
    if request.method == 'GET':
        rows = Report.objects.all()
        serializer = ReportSerializer(rows, many=True)
        response = {
            "total" : len(serializer.data),
            "success" : True,
            "message": '',
            "data" : serializer.data,
        } 
        return JSONResponse(response)

    elif request.method == 'POST':
        body = urllib.unquote(request.body)
        data = json.loads(body)['data']
        print data
        serializer = ReportSerializer(data=data)
        response = {
            "total" : 0,
            "success" : False,
            "message" : '',
        }
        if serializer.is_valid():
            serializer.save()
            response['total'] = len(serializer.data),
            response['data'] = serializer.data
            response['success'] = True
            return JSONResponse(response, status=201)
        response['data'] = serializer.errors
        return JSONResponse(response, status=400)

    elif request.method == 'PUT':
        body = urllib.unquote(request.body)
        data = json.loads(body)['data']
        print data
        serializer = ReportSerializer(Report.objects.get(id=id), data=data, partial=True)
        response = {
            "total" : 0,
            "success" : False,
            "message" : '',
        }
        if serializer.is_valid():
            serializer.save()
            response['total'] = len(serializer.data),
            response['data'] = serializer.data
            response['success'] = True
            return JSONResponse(response)

        response['data'] = serializer.errors
        return JSONResponse(response, status=400)

    elif request.method == 'DELETE':
        row = Report.objects.get(id=id)
        row.delete()
        response = {
            "success" : True,
            "message": '',
            "data": []
        } 
        return JSONResponse(response, status=204)