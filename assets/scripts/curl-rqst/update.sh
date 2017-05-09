#ID=97 CONTENT='this is changed content' TOKEN=BAhJIiUzMmY0YzVkNjA4ZWE5ODFiYjY2MGQ1NTcxYzlmNmZjYQY6BkVG--708886a26e7e58d49c5517e0edf8d0b6048268b4 sh scripts/curl-rqst/update.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/cars/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "color": {
      "content": "'"${CONTENT}"'"
    }
  }'
