import { ContactsCard } from "../components/ContactsCard";
import { render, screen, fireEvent } from '@testing-library/react';

type Contact = {
    id: number;
    name: string;
    telephone: string;
    address?: string | null;
    category?: string | null;
}

describe('ContactsCard Component', () => {
    test('zeig mir alle kontakte an', () => {
        const fakeContacts: Contact[] = [
            { id: 1, name: 'Max Mustermann', telephone: '1234567890', address: 'Musterstraße 1', category: 'Freund' },
            { id: 2, name: 'Erika Musterfrau', telephone: '0987654321', address: 'Beispielweg 2', category: 'Kollege' },
        ];

        render(<ContactsCard contacts={fakeContacts} onDelete={() => {}} />);

        expect(screen.getByText('Max Mustermann')).toBeInTheDocument();
        expect(screen.getByText('1234567890')).toBeInTheDocument();
        expect(screen.getByText('Musterstraße 1')).toBeInTheDocument();
        expect(screen.getByText('Freund')).toBeInTheDocument();
    })

    test('funktioniert der delete button', () => {
        const fakeContacts: Contact[] = [
            { id: 1, name: 'Max Mustermann', telephone: '1234567890', address: 'Musterstraße 1', category: 'Freund' },
        ];

        const mockOnDelete = jest.fn();

        render(<ContactsCard contacts={fakeContacts} onDelete={mockOnDelete} />);

        fireEvent.click(screen.getByText('Delete'));

        expect(mockOnDelete).toHaveBeenCalledWith(1);
    })

    test('wenn keine kontakte vorhanden sind', () => {
        const fakeContacts: Contact[] = [];

        render(<ContactsCard contacts={fakeContacts} onDelete={() => {}} />);
        
        expect(screen.getByText('Noch keine Kontakte vorhanden')).toBeInTheDocument();
    })
});