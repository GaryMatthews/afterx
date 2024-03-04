#!/usr/bin/env node

import { publish } from 'gh-pages';

publish('../packages/public', {
	branch: 'gh-pages',
	repo: 'git@github.com:GaryMatthews/afterx.net.git',
	cname: 'www.afterx.net',
	message: 'Publish',
}, (err) => {
	if (err) {
		return console.error('Publish error!', err);
	}
	console.log('Published!')
});
