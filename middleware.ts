import { NextMiddleware } from 'next/server';

export const middleware: NextMiddleware = (req) => {
    // empty middleware
    // if middleware is removed, the router.push works as expected
    console.log(`> middleware req.url ${req.url}`)
};
