#!/bin/bash

echo "Starting DnD Helper Playwright Tests..."

echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "Installing Playwright browsers..."
npx playwright install

echo ""
echo "Starting Vue.js development server..."
npm run dev &
DEV_PID=$!

echo ""
echo "Waiting for server to start..."
sleep 10

echo ""
echo "Running tests..."
npx playwright test

echo ""
echo "Opening test report..."
npx playwright show-report

# Clean up
kill $DEV_PID 2>/dev/null
