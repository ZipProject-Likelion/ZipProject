from django import forms
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Profile
# , CustomUser

# class SignupForm(UserCreationForm):
#     class Meta:
#         model=CustomUser
#         fields=['username','password1','password2','nickname','image','info']

class CustomUserChangeForm(UserChangeForm):
    # password = None
    # UserChangeForm에서는 password를 수정할 수 없다.
    # 하지만 이렇게 None 값으로 지정해주지 않으면 password를 변경할 수 없다는 설명이 화면에 표현된다.
    class Meta:
        model = get_user_model()
        fields = ['email', 'first_name', 'last_name',]
        
class ProfileForm(forms.ModelForm):
    nickname = forms.CharField(label="닉네임", required=False)
    description = forms.CharField(label="자기소개", required=False, widget=forms.Textarea())
    profile_image = forms.ImageField(label="이미지", required=False)
   	# # 위의 내용을 정의하지 않아도 상관없지만, 화면에 출력될 때 label이 영문으로 출력되는 것이 싫어서 수정한 것이다..
    class Meta:
        model = Profile
        fields = ['nickname', 'description', 'profile_image',]
