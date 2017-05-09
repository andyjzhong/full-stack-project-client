#TOKEN='BAhJIiVhM2VhZDUzNWM4YzEzOTkxMzY1NWYyYjFiNTk5NTM4MQY6BkVG--404255de9d79fe1d99d8f2103d7311d57006a6c7' TEXT='test ability to create' sh scripts/cars/create.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/cars"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "idea": {
      "content": "'"${TEXT}"'"
    }
  }'
