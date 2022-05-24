import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

global.React = React;
global.render = render;
global.userEvent = userEvent;
