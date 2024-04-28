import { render } from '@testing-library/react';
import PatientComponent from './PatientInfoPage';


it('renders without crashing', () => { 
  render(<PatientComponent />);
  const theadElement = document.getElementById('test_1234');
  expect(theadElement).toBeInTheDocument();
});