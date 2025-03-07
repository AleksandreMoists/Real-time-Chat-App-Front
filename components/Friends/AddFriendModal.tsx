import { Plus, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    avatar: string;
}

interface AddFriendModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddFriendModal = ({ isOpen, onClose }: AddFriendModalProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const mockUsers = [
        { id: 1, name: 'Alex Johnson', avatar: '/api/placeholder/40/40' },
        { id: 2, name: 'Maria Garcia', avatar: '/api/placeholder/40/40' },
        { id: 3, name: 'Raj Patel', avatar: '/api/placeholder/40/40' },
        { id: 4, name: 'Sarah Kim', avatar: '/api/placeholder/40/40' },
        { id: 5, name: 'Omar Hassan', avatar: '/api/placeholder/40/40' },    
    ];

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        const timer = setTimeout(() => {
            const results = mockUsers.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setSearchResults(results);
            setIsLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
            setIsLoading(false);
        };
    }, [searchQuery]); // Dependency array

    const handleAddFriend = (userId: number) => {
        console.log("Adding Friend with id", userId);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-4 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add Friend</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for friends..."
                        className="pl-10 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>

                <div className="max-h-64 overflow-y-auto">
                    {isLoading ? (
                        <div className="flex justify-center p-4">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 dark:border-white"></div>
                        </div>
                    ) : searchQuery.trim() !== '' && searchResults.length === 0 ? (
                        <p className="text-center py-4 text-gray-500">No users found</p>
                    ) : (
                        searchResults.map(user => (
                            <div key={user.id} className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                                <div className="flex items-center">
                                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                                    <span>{user.name}</span>
                                </div>
                                <button 
                                    onClick={() => handleAddFriend(user.id)}
                                    className="p-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};