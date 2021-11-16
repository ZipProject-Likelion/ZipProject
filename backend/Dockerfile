FROM python:3.7-slim
RUN python -m pip install --upgrade pip
RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/requirements.txt
RUN python -m pip install -r requirements.txt
COPY . /backend/
EXPOSE 8000