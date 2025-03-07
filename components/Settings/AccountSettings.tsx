import { useState } from 'react';

export const AccountSettings = () => {
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    return (
        <div className="p-4">
            <h3 className="text-sm font-medium mb-4">Account Information</h3>
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm">Email address</span>
                        {!isEditingEmail ? (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">user@example.com</span>
                                <button 
                                    onClick={() => setIsEditingEmail(true)}
                                    className="text-sm text-blue-500 hover:text-blue-600"
                                >
                                    Change
                                </button>
                            </div>
                        ) : (
                            <form className="flex items-center gap-2">
                                <input 
                                    type="email" 
                                    className="text-sm p-1 border rounded"
                                    defaultValue="user@example.com"
                                />
                                <button 
                                    type="submit"
                                    className="text-sm text-green-500 hover:text-green-600"
                                >
                                    Save
                                </button>
                                <button 
                                    onClick={() => setIsEditingEmail(false)}
                                    className="text-sm text-red-500 hover:text-red-600"
                                >
                                    Cancel
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm">Password</span>
                        {!isEditingPassword ? (
                            <button 
                                onClick={() => setIsEditingPassword(true)}
                                className="text-sm text-blue-500 hover:text-blue-600"
                            >
                                Change password
                            </button>
                        ) : (
                            <form className="space-y-2">
                                <input 
                                    type="password" 
                                    placeholder="Current password"
                                    className="text-sm p-1 border rounded block w-full"
                                />
                                <input 
                                    type="password" 
                                    placeholder="New password"
                                    className="text-sm p-1 border rounded block w-full"
                                />
                                <input 
                                    type="password" 
                                    placeholder="Confirm new password"
                                    className="text-sm p-1 border rounded block w-full"
                                />
                                <div className="flex gap-2">
                                    <button 
                                        type="submit"
                                        className="text-sm text-green-500 hover:text-green-600"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        onClick={() => setIsEditingPassword(false)}
                                        className="text-sm text-red-500 hover:text-red-600"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};