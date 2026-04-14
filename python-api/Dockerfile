# 1. Start with a lightweight version of Python
FROM python:3.10-slim

# 2. Create a working directory inside the container
WORKDIR /app

# 3. Copy the requirements file FIRST
COPY requirements.txt .

# 4. Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy the rest of our application code
COPY . .

# 6. Expose the port FastAPI runs on
EXPOSE 8000

# 7. The command to run when the container starts
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]