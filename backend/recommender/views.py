import operator
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Recommender
from .serializers import RecommenderSerializer

from product.serializers import ProductSerializer
from product.serializers import ProductTagSerializer

class RecommenderViewSet(viewsets.ModelViewSet):
    queryset = Recommender.objects.all()
    serializer_class = RecommenderSerializer

    def chosen_tag_list(self,request):
        choice = Recommender.objects.all()
        chosen_tags = []

        # 이용자의 선택지에서 tag 요소를 모두 추출
        for i in choice:
            for product in i.products.all(): # 상품
                for tag in product.tags.all():
                    chosen_tags.append(tag)
            for tag in i.product_tags.all(): # 상품 태그
                chosen_tags.append(tag)
            for curations in i.curations.all(): # 큐레이션
                for tag in curations.tags.all():
                    chosen_tags.append(tag)
            for tag in i.curation_tags.all(): # 큐레이션 태그
                chosen_tags.append(tag)

        serializer = ProductTagSerializer(chosen_tags,many=True)
        return Response(serializer.data)

    def top_tag_list(self,request):
        choice = Recommender.objects.all()
        chosen_tags = []
        for i in choice:
            for product in i.products.all():
                for tag in product.tags.all():
                    chosen_tags.append(tag)
            for tag in i.product_tags.all():
                chosen_tags.append(tag)
            for curations in i.curations.all():
                for tag in curations.tags.all():
                    chosen_tags.append(tag)
            for tag in i.curation_tags.all():
                chosen_tags.append(tag)

        # 각 tag 요소의 개수를 count
        tag_count = {}
        for i in chosen_tags:
            if i.id in tag_count: tag_count[i.id] += 1
            else: tag_count[i.id] = 1
        tag_count = sorted(tag_count.items(),key=operator.itemgetter(0))

        # 가장 많이 선택된 tag-top3 선별, 태그 종류가 2개 이하 : tag-top1 만 선별
        top_tags = []; idx = 0
        if len(tag_count)>2:
            for i in tag_count:
                for j in chosen_tags:
                    if j.id == i[0]: 
                        if j not in top_tags: top_tags.append(j)
                idx += 1
                if idx == 3: break
        elif len(tag_count)<2:
            for i in tag_count:
                for j in chosen_tags:
                    if j.id == i[0]: top_tags.append(j)
                break

        serializer = ProductTagSerializer(top_tags,many=True)
        return Response(serializer.data)

    '''def recommend_product(self,request):
        choice = Recommender.objects.all()
        chosen_tags = []
        for i in choice:
            for product in i.products.all():
                for tag in product.tags.all():
                    chosen_tags.append(tag)
            for tag in i.product_tags.all():
                chosen_tags.append(tag)
            for curations in i.curations.all():
                for tag in curations.tags.all():
                    chosen_tags.append(tag)
            for tag in i.curation_tags.all():
                chosen_tags.append(tag)

        # 각 tag 요소의 개수를 count
        tag_count = {}
        for i in chosen_tags:
            if i.id in tag_count: tag_count[i.id] += 1
            else: tag_count[i.id] = 1
        tag_count = sorted(tag_count.items(),key=operator.itemgetter(0))

        # 가장 많이 선택된 tag-top3 선별, 태그 종류가 2개 이하 : tag-top1 만 선별
        top_tags = []; idx = 0
        if len(tag_count)>2:
            for i in tag_count:
                for j in chosen_tags:
                    if j.id == i[0]: 
                        if j not in top_tags: top_tags.append(j)
                idx += 1
                if idx == 3: break
        elif len(tag_count)<2:
            for i in tag_count:
                for j in chosen_tags:
                    if j.id == i[0]: top_tags.append(j)
                break
        
        # top-tags를 포함하는 product 모두 반환

        serializer = ProductTagSerializer(top_tags,many=True)
        return Response(serializer.data)

    def recommend_curation(self,request):
        choice = Recommender.objects.all()
        chosen_tags = []
        for i in choice:
            for product in i.products.all():
                for tag in product.tags.all():
                    chosen_tags.append(tag)
            for tag in i.product_tags.all():
                chosen_tags.append(tag)
            for curations in i.curations.all():
                for tag in curations.tags.all():
                    chosen_tags.append(tag)
            for tag in i.curation_tags.all():
                chosen_tags.append(tag)

        # 각 tag 요소의 개수를 count
        tag_count = {}
        for i in chosen_tags:
            if i.id in tag_count: tag_count[i.id] += 1
            else: tag_count[i.id] = 1
        tag_count = sorted(tag_count.items(),key=operator.itemgetter(0))

        # 가장 많이 선택된 tag-top3 선별, 태그 종류가 2개 이하 : tag-top1 만 선별
        top_tags = []; idx = 0
        if len(tag_count)>2:
            for i in tag_count:
                for j in chosen_tags:
                    if j.id == i[0]: 
                        if j not in top_tags: top_tags.append(j)
                idx += 1
                if idx == 3: break
        elif len(tag_count)<2:
            for i in tag_count:
                for j in chosen_tags:
                    if j.id == i[0]: top_tags.append(j)
                break
        
        # top-tags를 포함하는 product 모두 반환

        serializer = ProductTagSerializer(top_tags,many=True)
        return Response(serializer.data)'''

recommender_list = RecommenderViewSet.as_view({'get': 'list'})
chosen_tag_list = RecommenderViewSet.as_view({'get': 'chosen_tag_list'})
top_tag_list = RecommenderViewSet.as_view({'get': 'top_tag_list'})