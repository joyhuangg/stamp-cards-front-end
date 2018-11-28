# Go Stamp! App

Go Stamp! is a stampcard online version build with ReactJs Frontend and Rails Backend.

<img src="/Go Stamp Demo 1.png" />
<img src="/Go Stamp Demo 2.png" />
<img src="/Go Stamp Demo 3.png" />

- User can choose stores.
- Each store had its own deals, when user click on the deal, there will be a stamp card show up.
- If user enter the right code, user will get 1 stamp.
- When user collects 6 stamps, user can keep the stamp card and redeem the deal anytime he/she wants.

### Getting Started:

Run backend:
```
bundle install
rake db:migrate
rake db:seed
rails s
```

Frontend:
```
npm i && npm start
```
### [Backend](https://github.com/linh4/go-stamp-back-end)

### Future Plans:
- There will be store site so store can add, edit and delete deals
- Use google map api to find stores
- Scan barcode instead of enter code
