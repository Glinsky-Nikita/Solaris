from rest_framework import serializers
from .models import СlientsList, FeedbackAndWishesList

class СlientsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = СlientsList
        fields = ['id', 'Name', 'Tell']


class FeedbackAndWishesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackAndWishesList
        fields = ['id', 'Name', 'Text']