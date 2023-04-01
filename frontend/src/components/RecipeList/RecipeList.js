import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardGroup from 'react-bootstrap/CardGroup'

const urlParams = new URLSearchParams(window.location.search);
const objString = urlParams.get('obj');
const userSelect = JSON.parse(objString);

export default function RecipeList() {
  return (
    <div>RecipeList</div>
  )
}
