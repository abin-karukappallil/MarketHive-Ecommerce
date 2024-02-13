var express = require('express');
var router = express.Router();
products=[
  {
    name: "Iphone 15",
    description: "Very good performance phone",
    price: "1000$",
    rating: "4.0",
    image: "data:image/webp;base64,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"
  },
  {
  name: "Samsung Galaxy S22 Ultra",
    description: "Exceptional flagship smartphone with top-notch features.",
    price: "1200$",
    rating: "4.5",
    image: "data:image/webp;base64,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"
  },
  {
    name: "Google Pixel 7 Pro",
    description: "Cutting-edge smartphone renowned for its photography prowess.",
    price: "999$",
    rating: "4.3",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "OnePlus 10 Pro",
    description: "Premium device known for its speed and smooth performance.",
    price: "1100$",
    rating: "4.2",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABQQGBwIDCAH/xABHEAABAwIDAggFDw0AAAAAAAABAAIDBBEFBhIhMQcTIkFRYXGBIzKxstEUFyQzNUJiY3JzhJGTwdIVFiZEUlRVgpShpMLw/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAeEQEAAQQDAQEAAAAAAAAAAAAAAQIDETESMkEhE//aAAwDAQACEQMRAD8A3FCEIAQqPj2aqmixWanjqIomRnSGu037dqjR5wqXfrkB72oTm5ES0FCpMGZauXxZ2O+TpUStxrMBqg+mq2tpiWsDGQsc65PKeS7mHQNu9bEZH6Q0FCz84rjtvdj/ABWLn8r48D7sX+ixreMj9KWhIWduxnHubFwPorFbssVlXXYPDLiBjdVAuZI6Julr7GwcBzXFja+xZMTBqa4nRshCFhghCCgPnDhgDXZ8qD4O/FxjU/cNr9/UqvRPLRY6C6+w7P722WvuVm4YhbPdSG6QTFH4x2eM9VCmdYtDiLat4Iv19XTZNBVwydPUx4oxj5CWOcASTvdf3vwbW3rSHP5Le/ylZ9TGgixWibhxhOqpNuJle+8YtpLtRNnHbcC3YOe8Of4NnYfKVtO0bm3o564L11FTzTsD4gHXc5tr7bht14vpavjYgIHOaTc7rWIdbt2hUTxLioqGwxPlffSxpcbC5sFd8jukdgEZm08YZHag3c09HcqDO4GSSBwAc3eL3G/ds71f8k+4TD0yOS1x8Us7P0IQpOgIQhAYrnSClqMy1kk1PHI/jHN1PaCbA7uxKosPw/Z7Cp/swmudHBuZa0DYONclcT+kgdZ5lrkmfphRU1LTv1wU8MbrW1NYAU01+BiPUfOKVNIa0EPa65tsv0D0qYX+Ah+SfOKajZcnOEzxiCVjpmRSNdcP1crSdPN3dB7lHfV0uss9W6XNY47ZWWDidwFrDYANW4b0p47i5WOJ2O5B70qqDpqZz0Rm31hVxtvIxp5Gvqa2RsnGNEpAebbends51pWQ368vstzSuCyfCDpwt0p3vefKtT4OSHZXhcPfSPJ+tLc0ez2WdCEKLpCEIQGH56dbNFcPjCk8b7ix3Jjn51s113zhSWN61x1bk0gcGiw2d6nsrYGPhp5hbVHdrug63JRE9e9bTMqaaneDomDDpf8Azu2HqT29seuIRmOUSAatJuOtRcQPsiQtNw6IkHpXdFOZo30VTds7Bdtz4w6v+8ijSktjZI7dA/RIPglXzlkJFHIPzegc072rVeC92vJ1K7pfJ5xWQYcSyjqcOk9sgeXM+Ex20ELXeCtpbkykad4kk84qdzqpZ7LchCFB1BCEIDBs/n9LK/50+QJCwp5wgbM24gPjfuCQsK1x1blMjcmdwaWnsbHQfPck8ZUuSotFA0AnTGdVttuW5Pb2XwgxzEa6KqYYrRmF1wLC/wBabYXijMTjdUMj1StbpqqYb3N5yF1Uep62LiqgXA8Vw8ZnZ6Pv2pGcIq6WrbPQSlssZuySMq04lsHr2sDGSte+WBntNXCNT4x+y9vOFsfBoQ7KVO4PY8F7+UwEA8rrWNU89VOddXhcRqDvnhe6Iu7Q3etl4NDfKkF94lkB5RNrO6SkudVLPZakIQoOkIQhAI8YylgeM1PqnEKFsk9gDI17mkgdNjtUL1vcsfw9327/AEq0oQXjTPir+t/lobqB327/AEryl4NsqTSiWTDXF4bp1CpkabdztqtqEN4xHinngyykd+GyH6XN+Jfo4NMqDxcPlHZWTD/ZW9CBiFS9bfK/7jP/AFs341ZMNw+kwuhhocPp46elhbpjijFg0KShDcBCEID/2Q=="
  },
  {
    name: "Xiaomi Mi 12",
    description: "High-performing phone with innovative features at an affordable price.",
    price: "950$",
    rating: "4.0",
    image: "data:image/jpeg;base64,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"
  }
  
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product', function(req, res, next) {
  res.render('admin/add-product',{admin:true});
})
router.post('/add-product', function(req, res, next) {
  console.log(req.body);
  console.log(req.files.image);
}
)

module.exports = router;
