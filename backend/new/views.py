from django.shortcuts import render, redirect, get_object_or_404
from django.utils import timezone
from .models import Content, Image
from .forms import ContentForm

from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import ContentSerializer, ImageSerializer

class ContentListAPI(APIView):
    def get(self, request):
        queryset = Content.objects.all()
        print(queryset)
        serializer = ContentSerializer(queryset, many=True)
        return Response(serializer.data)

class ImageListAPI(APIView):
    def get(self, request):
        queryset = Image.objects.all()
        print(queryset)
        serializer = ImageSerializer(queryset, many=True)
        return Response(serializer.data)

def new(request):
    if request.method == 'POST': form = ContentForm(request.POST,request.FILES)
    else: form = ContentForm()
    return render(request, 'new.html',{'form':form})

def detail(request, index):
    post = get_object_or_404(Content, pk = index)
    return render(request, 'detail.html', {'post':post})

def edit(request, index):
    post = get_object_or_404(Content, pk = index)
    if request.method=='POST':
        form = ContentForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now
            post.save()
            return redirect('detail', index=post.pk)
    else:
        form = ContentForm(instance=post)
    return render(request, 'edit.html',{'form':form})

def delete(request,pk):
    post = get_object_or_404(Content, pk=pk)
    post.delete()
    return redirect('home')

def new1(request):
    if request.method == 'POST':
        form = ContentForm(request.POST,request.FILES)
        if form.is_valid():
            # post = form.save(commit=False)
            # post.author = request.user
            # post.published_date = timezone.now()
            # post.save()
            # for img in request.FILES.getlist('imgs'): # 입력하는 데이터가 dic 형태로 저장 된다.
            #     image = Image()
            #     image.post = post
            #     image.file = img
            #     image.save()
            return redirect('SHARE')
    else:
        form = ContentForm()
    return render(request, 'new1.html',{'form':form})

def new2(request):
    if request.method == 'POST':
        form = ContentForm(request.POST,request.FILES)
        if form.is_valid():
            # post = form.save(commit=False)
            # post.author = request.user
            # post.published_date = timezone.now()
            # post.save()
            # for img in request.FILES.getlist('imgs'): # 입력하는 데이터가 dic 형태로 저장 된다.
            #     image = Image()
            #     image.post = post
            #     image.file = img
            #     image.save()
            return redirect('ZIP')
    else:
        form = ContentForm()
    return render(request, 'new2.html',{'form':form})

def SHARE(request):
    if request.method == 'POST': form = ContentForm(request.POST,request.FILES)
    else: form = ContentForm()
    return render(request, 'SHARE.html',{'form':form})

def ZIP(request):
    if request.method == 'POST': form = ContentForm(request.POST,request.FILES)
    else: form = ContentForm()
    return render(request, 'ZIP.html',{'form':form})