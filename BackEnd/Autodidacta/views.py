from rest_framework import viewsets
from .serializers import (
    DetallesDeVentaDeCompraSerializar,
    AgendarSerializar,
    ProductosDeCompraSerializar,
    UsuarioSerializar,
)  # Asegúrate de que "serializer" sea "serializers"
from .models import Usuario, Agendar, DetallesDeVenta, ProductosDeCompra



class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializar
    queryset = Usuario.objects.all()  # Corregimos el atributo "MuchasConsultas"


class AgendarView(viewsets.ModelViewSet):
    serializer_class = AgendarSerializar
    queryset = Agendar.objects.all()  # Corregimos el atributo "MuchasConsultas"


class ComprarProductosView(viewsets.ModelViewSet):
    serializer_class = ProductosDeCompraSerializar
    queryset = (
        ProductosDeCompra.objects.all()
    )  # Corregimos el atributo "MuchasConsultas"


class DetallesDeVentaDeCompraView(viewsets.ModelViewSet):
    serializer_class = DetallesDeVentaDeCompraSerializar
    queryset = (
        DetallesDeVenta.objects.all()
    )  # Corregimos el atributo "MuchasConsultas"
