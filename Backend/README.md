# Backend

## Flask API Setup

To setup the backend Flask API, follow these instructions:
1. Create a python virtual environment using the /venv/ folder (optional)
2. Install the required packages using `pip install -r requirements.txt`
3. create a `.env` file in the `/api/` folder with the following contents:
```
DATABASE_URL=<cockroachdb_connection_url>
```
4. Run the Flask API using the bash script `startAPI.sh` in the `/api/` folder
5. navigate to the url `http://localhost:5000/` to view the API endpoints