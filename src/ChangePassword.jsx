import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState(null);

    const handleSubmit = () => {
        // Validation or submission logic here
        console.log({ code, password, confirmPassword });
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
            <h2>Change Password</h2>
            <div className="p-field">
                <label htmlFor="code" className="p-d-block">Code</label>
                <InputNumber
                    id="code"
                    value={code}
                    onValueChange={(e) => setCode(e.value)}
                    className="p-inputtext-sm"
                    placeholder="Enter the code"
                />
            </div>
            <div className="p-field">
                <label htmlFor="password" className="p-d-block">New Password</label>
                <Password
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    toggleMask
                    feedback={false}
                    className="p-inputtext-sm"
                    placeholder="Enter your new password"
                />
            </div>
            <div className="p-field">
                <label htmlFor="confirmPassword" className="p-d-block">Confirm New Password</label>
                <Password
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    toggleMask
                    feedback={false}
                    className="p-inputtext-sm"
                    placeholder="Re-enter your new password"
                />
            </div>
            <Button label="Send" icon="pi pi-check" className="p-button-success" onClick={handleSubmit} />
        </div>
    );
};

export default ChangePassword;