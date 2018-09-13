# Petersen Parts API

> API for custom functionality on [Petersen Parts](https://petersenparts.com)

## Methods

#### /sendEmail

Validates data and sends email

```javascript
$.post('/sendEmail', {
  'form': 'become-dealer',
  'form-data': {
    ...
  }
})
```

#### form

Type: `String`

Values: become-dealer

`Required`

#### form-data

Type: `Object`

`Required`
