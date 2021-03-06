from rest_framework import viewsets, routers, serializers
from .models import *


#
# This file holds the REST related code
#


#################################################################################
#
#
#  SERIALIZERS : The serializers specify how the records are serialized in the
#                list or detail-views
#
#
#################################################################################


class ReportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
       model = Report
       fields = ('id', 'value1', 'value2', 'value3', 'value4', 'value5', 'value6',)

    value1 = serializers.CharField(required=True)
    value2 = serializers.CharField(required=False, allow_blank=True)
    value3 = serializers.CharField(required=False, allow_blank=True)
    value4 = serializers.CharField(required=True)
    value5 = serializers.BooleanField(required=True)
    value6 = serializers.CharField(required=False, allow_blank=True)
    
    def create(self, validated_data):
        """
        Create and return a new `Report` instance, given the validated data.
        """
        return Report.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing Report instance, given the validated data.
        """
        instance.value1 = validated_data.get('value1', instance.value1)
        instance.value2 = validated_data.get('value2', instance.value2)
        instance.value3 = validated_data.get('value3', instance.value3)
        instance.value4 = validated_data.get('value4', instance.value4)
        instance.value5 = validated_data.get('value5', instance.value5)
        instance.value6 = validated_data.get('value6', instance.value6)
        instance.save()
        return instance

class Combobox3Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
       model = Combobox3
       fields = ('value',)

    value = serializers.CharField(required=True)  

class FolderTreeNodeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
       model = FolderTreeNode
       fields = ('is_root', 'is_leaf', 'name', 'parent')

    name = serializers.CharField(required=True) 
    is_root = serializers.BooleanField(required=True)
    is_leaf = serializers.BooleanField(required=True)
    parent = serializers.PrimaryKeyRelatedField(required=False, queryset=FolderTreeNode.objects.all())

     
#################################################################################
#
#
#  FILTERS : Use filters to retsrict items returned by querysets (RFU)
#
#
#################################################################################


#################################################################################
#
#
#  VIEWSETS : Controllers for incoming requests. They access the model and return
#             the proper output
#
#
#################################################################################


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    # filter_class =

class Combobox3ViewSet(viewsets.ModelViewSet):
    queryset = Combobox3.objects.all()
    serializer_class = Combobox3Serializer

class FolderTreeNodeViewSet(viewsets.ModelViewSet):
    queryset = FolderTreeNode.objects.all()
    serializer_class = FolderTreeNodeSerializer
   
#################################################################################
#
# Register viewsets to REST router
#
#################################################################################


def register(restrouter):
    restrouter.register(r'report', ReportViewSet)
    restrouter.register(r'combobox3', Combobox3ViewSet)
    restrouter.register(r'foldertreenode', FolderTreeNodeViewSet)
    