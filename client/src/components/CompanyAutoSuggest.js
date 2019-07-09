import React from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';


const cities = [
  { value: 'city1', label: 'Lviv' },
  { value: 'city2', label: 'Kyiv' },
  { value: 'city3', label: 'Vinnytsia' },
  { value: 'city4', label: 'Lutsk' },
  { value: 'city5', label: 'Odessa' },
  { value: 'city6', label: 'Ternopil' },
  { value: 'city7', label: 'Donetsk' },
  { value: 'city8', label: 'Kovel' },
  { value: 'city9', label: 'Rivne' },
  { value: 'city10', label: 'Kruvuy Rig' },
  { value: 'city11', label: 'Mariupol' },
  { value: 'city12', label: 'Harkiv' },
  { value: 'city13', label: 'Ivano-Frankinsk' },
  { value: 'city14', label: 'Kremenchuk' },
  { value: 'city15', label: 'Uzhgorod' },
  { value: 'city16', label: 'Chernihiv' },
  { value: 'city17', label: 'Chernivtsi' },
  { value: 'city18', label: 'Dnipro' },
  { value: 'city19', label: 'Luhansk' },
  { value: 'city20', label: 'Herson' },
  { value: 'city21', label: 'Poltava' },
  { value: 'city22', label: 'Mukolaiv' },
  { value: 'city23', label: 'Zaporizzha' },
  { value: 'city24', label: 'Zhutomyr' },
  { value: 'city25', label: 'Cherkassy' },
  { value: 'city26', label: 'Bila Tserkva' },
  { value: 'city27', label: 'Sumy' },
  { value: 'city28', label: 'Kirovograd' }
];
const companyType = [
  { value: 'type1', label: 'Private Enterprise' },
  { value: 'type2', label: 'Public Enterprise' }
];



function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, arr) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
      return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return arr.filter(city => regex.test(getSuggestionValue(city)));
}

function getSuggestionValue(suggestion) {
  return `${suggestion.label}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.label}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
      <span className={'suggestion-content ' + suggestion.twitter}>
          <span className="name">
              {
                  parts.map((part, index) => {
                      const className = part.highlight ? 'highlight' : null;

                      return (
                          <span className={className} key={index}>{part.text}</span>
                      );
                  })
              }
          </span>
      </span>
  );
}

export class CompanyAutoSuggest extends React.Component {
  constructor() {
      super();

      this.state = {
          value: '',
          suggestions: []
      };
      this.onChange = this.onChange.bind(this);
  }

  onChange = (_, { newValue }) => {
      const { id, onChange } = this.props;

      this.setState({
          value: newValue
      });

      onChange(id, newValue);
  };

  onSuggestionsFetchRequestedCity = ({ value }) => {
      this.setState({
          suggestions: getSuggestions(value, cities)
      });
  };
  onSuggestionsFetchRequestedUni = ({ value }) => {
      this.setState({
          suggestions: getSuggestions(value, companyType)
      });
  };

  onSuggestionsClearRequested = () => {
      this.setState({
          suggestions: []
      });
  };

  render() {
      const { id, placeholder } = this.props;
      const { value, suggestions } = this.state;
      const inputProps = {
          placeholder,
          value,
          onChange: this.onChange
      };

      return (
          <div>
              {id === 'city' ? (<Autosuggest
                  id={id}
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequestedCity}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
              />) : (<Autosuggest
                  required
                  id={id}
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequestedUni}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
              />)}
          </div>
      );
  }
} 