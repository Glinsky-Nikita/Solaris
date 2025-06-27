from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import СlientsList, FeedbackAndWishesList # импорт модели
from .serializers import СlientsListSerializer, FeedbackAndWishesListSerializer

from rest_framework import status

@api_view(['POST'])
def FeedbackAndWishesShow(request):
    queryset = FeedbackAndWishesList.objects.all().order_by('-id')
    serializer = FeedbackAndWishesListSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def FeedbackAndWishes(request):
    name = request.data.get('name', "Иван")
    text = request.data.get('text', "Все круто")

    FeedbackAndWishesList.objects.create(Name=name, Text=text)

    return Response({
    })

@api_view(['POST'])
def Subscribe(request):
    name = request.data.get('name', "Иван")
    tell = request.data.get('tell', "+7999999999")

    СlientsList.objects.create(Name = name, Tell = tell)

    return Response({
    })
