$('.next').on('click', function() { 
  var pageWidth = 1024;
  var pageIndex = $('.next').index(this) + 1;
  var pageOffset = '-' + (pageWidth * pageIndex) + 'px';

  $('.app').css('transform', 'translate(' +  pageOffset + ',0)');
});

$('.back').on('click', function() {
  var pageWidth = 1024;
  var pageIndex = $('.back').index(this) ;
  var pageOffset = '-' + (pageWidth * pageIndex) + 'px' ;
  
  $('.app').css('transform', 'translate(' + pageOffset + ',0)');
});


function formatNumber(n) {
  var result = String(n);
  
  if (n >= 10000){
    var numbers= String(n).split("");
    numbers.splice(2,0, ',');
    return numbers.join('');
  }     
  
  if (n >= 1000) {
    var numbers = String(n).split("");
    numbers.splice(1, 0, ',');
    return numbers.join('');
  }
  
  return result;
}

$('.calculate-results').on('click', function() {
  var fruit = $('input[name="fruit"]:checked').val();
  var smells = $('input[name="smells"]:checked').val();
  var flavor = $('input[name="flavors"]:checked').val();
  var result = 'unknown';
  
  if (fruit === '0' && smells === '3' && flavor === 'no') {
    result = 'citrus!';
  }
  
  if (fruit === '2' && smells === '2' && flavor === 'no') {
    result = 'fruit!';
  }
  
  if(fruit === '0' && smells === '2' && flavor === 'no'){
    result = 'fruit';
  }
  
  if (fruit === '1' && smells === '0' && flavor === 'no') {
    result = 'floral!';
  }
  
  if (flavor === 'yes') {
    result = 'leather!';
  }
  
  if (fruit === '1' && smells === '1' && flavor === 'no') {
    result = 'Aquatic!';
  }
  
  if (fruit === '1' && smells === '2' && flavor === 'no') {
    result = 'floral';
  }
  
  if ( fruit === '2' && smells === '1' && flavor === 'no') {
    result = 'green (vetiver)s!';
  }
  
  
  $('.result').text(result);
  
})

$('.age input').on('change', function() {
  $('.age .next').css('display', 'inline-block');
});


$('.fruit input').on('change', function(){
  $('.fruit .next').css('display', 'inline-block');
});


$('.smells input').on('change', function() {
  $('.smells .next').css('display', 'inline-block');
});

$('.flavors input').on('change', function() {
  $('.flavors .next').css('display', 'inline-block');
});

$('.end .save').on('click', function() {
  var fruit = $('input[name="fruit"]:checked').val();
  var smells = $('input[name="smells"]:checked').val();
  var flavor = $('input[name="flavors"]:checked').val();
  var data = {
    fruit: fruit,
    smells: smells,
    flavor: flavor
  }
  
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/test",
    data: JSON.stringify(data)
  })  
});


