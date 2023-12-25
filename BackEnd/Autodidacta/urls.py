from django.urls import path, include
from rest_framework import routers

from rest_framework.documentation import include_docs_urls
from Autodidacta import views

router1 = routers.DefaultRouter()
router2 = routers.DefaultRouter()
router3 = routers.DefaultRouter()
router4 = routers.DefaultRouter()
router1.register(r"Usuario", views.UsuarioView, "Usuario")
router2.register(r"agendar", views.AgendarView, "agendar")
router3.register(r"ComprarProductos", views.ComprarProductosView, "ComprarProductos")
router4.register(r"DetallesDeVentaDeCompra", views.DetallesDeVentaDeCompraView, "DetallesDeVentaDeCompra")
urlpatterns1 = [path("api/v1/", include(router1.urls))]
urlpatterns2 = [path("api/v2/", include(router2.urls))]
urlpatterns3 = [path("api/v3/", include(router3.urls))]
urlpatterns4 = [path("api/v4/", include(router4.urls))]
urlpatterns5 = [path("documentacionDeApi/", include_docs_urls(title="API de Ingresar"))]
