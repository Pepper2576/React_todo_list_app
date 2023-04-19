import React from 'react'
import TodoForm from './todoForm'

describe('<TodoForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoForm />)
  })
})