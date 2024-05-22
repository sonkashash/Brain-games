#!/usr/bin/env node
import greetingsUser from '../src/cli.js';
import isEven from '../src/isEven.js';

const nameUser = greetingsUser();
isEven(nameUser);
