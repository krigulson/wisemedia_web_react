import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class LngSelector extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'English', label: 'English' },
          { value: 'German', label: 'German' },
        ]}
      />
    )
  }
}

