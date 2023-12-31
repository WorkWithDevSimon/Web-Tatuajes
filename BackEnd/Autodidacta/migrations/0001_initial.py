# Generated by Django 4.2.4 on 2023-12-04 16:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductosDeCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.URLField()),
                ('nameProduct', models.CharField(max_length=255)),
                ('price', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('cantidad', models.PositiveIntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('apellido', models.CharField(max_length=30)),
                ('telefono', models.CharField(max_length=30)),
                ('nacionalidad', models.CharField(max_length=30)),
                ('correoElectronico', models.CharField(max_length=30)),
                ('nombre_usuario', models.CharField(max_length=50)),
                ('contraseña_usuario', models.CharField(max_length=128)),
                ('TipoUsuario', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='DetallesDeVenta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.URLField()),
                ('nameProduct', models.CharField(max_length=255)),
                ('price', models.IntegerField()),
                ('cantidad', models.PositiveIntegerField(default=1)),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('Total', models.IntegerField()),
                ('usuarioid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Autodidacta.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Agendar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('apellido', models.CharField(max_length=30)),
                ('tatuador', models.CharField(max_length=30)),
                ('Tamañotatuaje', models.CharField(max_length=20)),
                ('NombreDeltatuaje', models.CharField(max_length=50)),
                ('fecha', models.CharField(max_length=15)),
                ('hora_Inicio', models.CharField(max_length=25)),
                ('hora_Fin', models.CharField(max_length=25)),
                ('usuarioid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Autodidacta.usuario')),
            ],
        ),
    ]
