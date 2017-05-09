#ID=97 TOKEN=BAhJIiUxMTMwZjU1M2Q1M2E0YjhiMzdiYjE2YTU4MjJmNzk5YQY6BkVG--1dc3eaa1e1dd3cea08e2d7af13ee40d9186f41fc sh scripts/cars/delete.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/cars/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"
