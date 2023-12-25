import bcrypt
from django.db import models


class Usuario(models.Model):
    # Estos necesistan 50 porque bienen encripados
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    telefono = models.CharField(max_length=30)
    nacionalidad = models.CharField(max_length=30)
    correoElectronico = models.CharField(max_length=30)
    nombre_usuario = models.CharField(max_length=50)
    contraseña_usuario = models.CharField(
        max_length=128
    )  # Almacena el hash de la contraseña
    TipoUsuario = models.CharField(max_length=20)

    def save(self, *args, **kwargs):
        if not self.id:
            # Esta es una nueva instancia, así que encriptamos la contraseña
            hashed_password = bcrypt.hashpw(
                self.contraseña_usuario.encode("utf-8"), bcrypt.gensalt()
            )
            self.contraseña_usuario = hashed_password.decode("utf-8")
        super(Usuario, self).save(*args, **kwargs)

    def __str__(self):
        return f"Nombre:{self.nombre}, Apellido:{self.apellido}, nombre de usuario:{self.nombre_usuario}" 


class Agendar(models.Model):
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    tatuador = models.CharField(max_length=30)
    Tamañotatuaje = models.CharField(max_length=20)
    NombreDeltatuaje = models.CharField(max_length=50)
    fecha = models.CharField(
        max_length=15
    )  # Utilizar un CharField para horas y minutos (por ejemplo, "01:01")

    hora_Inicio = models.CharField(
        max_length=25
    )  # Utilizar un CharField para horas y minutos (por ejemplo, "01:01")
    hora_Fin = models.CharField(max_length=25)
    usuarioid = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"Nombre:{self.nombre}, Apellido:{self.apellido}, Tatuador:{self.tatuador}" 

# El usuario tendra muscho productos pero solamente estaran en un usuaruio
# Estos son los datos que iran en la tabla y los que el administrador podra controlar
class ProductosDeCompra(models.Model):
    img = models.URLField()  # URL de la imagen del producto
    nameProduct = models.CharField(max_length=255)  # Nombre del producto
    price = models.IntegerField()  # Precio del producto como un entero
    stock = models.IntegerField()  # Precio del producto como un entero
    cantidad = models.PositiveIntegerField(
        default=1
    )  # Cantidad del producto con valor por defecto de 1

    def __str__(self):
        return f"Nombre:{self.nameProduct},Precio:{self.price},Stock:{self.stock}" 


class DetallesDeVenta(models.Model):
    img = models.URLField()  # URL de la imagen del producto
    nameProduct = models.CharField(max_length=255)  # Nombre del producto
    price = models.IntegerField()  # Precio del producto como un entero
    cantidad = models.PositiveIntegerField(
        default=1
    )  # Cantidad del producto con valor por defecto de 1
    fecha = models.DateField()
    hora = models.TimeField()
    Total = models.IntegerField()  # Precio del producto como un entero
    usuarioid = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    # productoid = models.ForeignKey(ProductosDeCompra, on_delete=models.CASCADE)
    def __str__(self):
        return f"Nombre del producto:{self.nameProduct},Precio:{self.price},Cantidad:{self.cantidad}" 
