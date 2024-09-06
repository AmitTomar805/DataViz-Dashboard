# Use the official Python image from the Docker Hub
FROM python:3

# Set environment variable to avoid buffering
ENV PYTHONUNBUFFERED 1

# Create a directory for the Django code
RUN mkdir /code
WORKDIR /code

# Copy the requirements file first to leverage Docker layer caching
COPY requirements.txt /code/

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . /code/
