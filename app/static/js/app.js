import React from 'react';
import ReactDOM from "react-dom";
import { PageContainer } from './components/PageContainer';

document.addEventListener("DOMContentLoaded", () =>
	ReactDOM.render(
	  <PageContainer />,
	  document.getElementById('content')
	)
);
