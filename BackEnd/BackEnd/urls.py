from django.contrib import admin
from django.urls import path, include
from Autodidacta.urls import (
    urlpatterns1,
)  # Importa directamente las URLs desde el módulo

from Autodidacta.urls import (
    urlpatterns2,
)  # Importa directamente las URLs desde el módulo
from Autodidacta.urls import (
    urlpatterns3,
)  # Importa directamente las URLs desde el módulo
from Autodidacta.urls import (
    urlpatterns4,
)  # Importa directamente las URLs desde el módulo
from Autodidacta.urls import (
    urlpatterns5,
)  # Importa directamente las URLs desde el módulo

urlpatterns = [
    path("admin/", admin.site.urls),
    path("Usuario/", include(urlpatterns1)),  # Utiliza la variable directamente
    path("agendar/", include(urlpatterns2)),  # Puedes usar el módulo directamente
    path("productosDeCompra/", include(urlpatterns3)),
    path("DetallesDeVentaDeCompra/", include(urlpatterns4)),
    path("Documentacion/", include(urlpatterns5)),
]
