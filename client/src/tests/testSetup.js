import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getAllByRole, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import testData from 'tests/testData.js';

global.React = React;
global.render = render;
global.getAllByRole = getAllByRole;
global.waitFor = waitFor;
global.userEvent = userEvent;
global.testData = testData;
