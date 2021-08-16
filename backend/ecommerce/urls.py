from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('product/<str:pk>', views.getProduct, name="product"),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
