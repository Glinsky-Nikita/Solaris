from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeedbackAndWishes, FeedbackAndWishesShow, Subscribe

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('FeedbackAndWishesShow/', FeedbackAndWishesShow),
    path('FeedbackAndWishes/', FeedbackAndWishes),
    path('Subscribe/', Subscribe)
]