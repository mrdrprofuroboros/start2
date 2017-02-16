from django.conf.urls import url
from frontend import views


urlpatterns = [
    url(r'^$', views.ReportView.as_view(), name='index'),
    url(r'^combobox3/$', views.getCombobox3, name='getcombobox3'),
    url(r'^foldertree/$', views.getFolderTree, name='getfoldertree'),
    url(r'^data/$', views.data, name='data'),
    url(r'^data/(?P<id>[0-9]+)$', views.data, name='data'),
]
