from django.contrib import admin

from .models import Usuario, Agendar, DetallesDeVenta, ProductosDeCompra

# Register your models here.


admin.site.register(Usuario)
admin.site.register(Agendar)
admin.site.register(DetallesDeVenta)
admin.site.register(ProductosDeCompra)
