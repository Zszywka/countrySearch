$(function() {
  var url = 'https://restcountries.eu/rest/v1/name/';
  var countriesList = $('#countries');

  var button = $('#search').click(searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();

    if (!countryName.length) {
      countryName = 'Poland';
    }
    $.ajax({
      method: 'GET',
      url: url + countryName,
      success: showCountriesList
    });
  }

  function showCountriesList(response) {
    countriesList.empty();

    response.forEach(function(item) {
      $('<li>').text('country: ' + item.name).appendTo(countriesList);
      $('<li>').text('capital: ' + item.capital).appendTo(countriesList);
      $('<li>').text('region: ' + item.region).appendTo(countriesList);
      $('<li>').text('subregion: ' + item.subregion).appendTo(countriesList);
      $('<li>').text('population: ' + item.population).appendTo(countriesList);
      $('<li>').text('area: ' + item.area).appendTo(countriesList);
      $('<li>').text('timezones: ' + item.timezones).appendTo(countriesList);
      $('<li>').text('relevence: ' + item.relevence).appendTo(countriesList);
      $('<li>').text('translations: ' + item.translations).appendTo(countriesList);
      $('<li>').text('demonym: ' + item.demonym).appendTo(countriesList);
      $('<li>').text('borders: ' + item.borders).appendTo(countriesList);
    });
  }
});
