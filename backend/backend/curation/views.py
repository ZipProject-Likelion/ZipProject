from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import CurationSerializer


from .models import Curation


# curation list 가져오기
@api_view(['GET'])
def curationList(request):
    curations=Curation.objects.all().order_by('-id')
    serializer=CurationSerializer(curations, many=True)
    return Response(serializer.data)

# curation {id}로 가져오기
@api_view(['GET'])
def curationDetail(request, pk):
    curations=Curation.objects.get(id=pk)
    serializer=CurationSerializer(curations, many=False)
    return Response(serializer.data)


#curation 생성
@api_view(['POST'])
def curationCreate(request):
    serializer=CurationSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#curation update
@api_view(['POST'])
def curationUpdate(request, pk):
    curation=Curation.objects.get(id=pk)
    serializer=CurationSerializer(instance=curation, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


#curation 삭제
def curationDelete(request,pk):
    curation=Curation.objects.get(id=pk)
    curation.delete()

    return Response("Curation successfully delete!")