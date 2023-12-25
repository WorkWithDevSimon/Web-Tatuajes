from rest_framework import serializers
from .models import Usuario, Agendar, DetallesDeVenta, ProductosDeCompra


class UsuarioSerializar(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = "__all__"


class AgendarSerializar(serializers.ModelSerializer):
    class Meta:
        model = Agendar
        fields = "__all__"


class ProductosDeCompraSerializar(serializers.ModelSerializer):
    class Meta:
        model = ProductosDeCompra
        fields = "__all__"


class DetallesDeVentaDeCompraSerializar(serializers.ModelSerializer):
    class Meta:
        model = DetallesDeVenta
        fields = "__all__"
