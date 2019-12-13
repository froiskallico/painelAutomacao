import idleTimeout from 'idle-timeout';
import { toast } from 'react-toastify';

export default (callback, delay = 3) => {
    idleTimeout(
        async () => {
            await toast(
                `Você será desconectado por inatividade em 3 segundos`,
                {
                    autoClose: 3000,
                    className: "timeout-toast",
                    onClose: () => {
                        callback()
                    }
                }
            );
            
        }, 
        {
            element: document,
            timeout: 1000 * delay,
            loop: false
        }
    )
}