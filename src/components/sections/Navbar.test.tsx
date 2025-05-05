import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the logo and teacher name', () => {
    render(<Navbar />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('English Teacher')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', async () => {
    render(<Navbar />);
    
    // Mobile menu should be hidden initially
    const mobileMenu = screen.getByRole('navigation').querySelector('#mobile-menu');
    expect(mobileMenu).toHaveClass('hidden');
    
    // Click the mobile menu button
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    await userEvent.click(menuButton);
    
    // Mobile menu should be visible after click
    expect(mobileMenu).toHaveClass('block');
    
    // Click again to hide
    await userEvent.click(menuButton);
    
    // Mobile menu should be hidden again
    expect(mobileMenu).toHaveClass('hidden');
  });
});