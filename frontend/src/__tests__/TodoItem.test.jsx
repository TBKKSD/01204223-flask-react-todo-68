import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import TodoItem from '../TodoItem.jsx'

describe('TodoItem', () => {
  it('renders with no comments correctly', () => {
    // เดี๋ยวจะเพิ่มโค้ดตรงนี้
    render(
      <TodoItem todo={baseTodo} />
    );
    expect(screen.getByText('Sample Todo')).toBeInTheDocument();
  });
});