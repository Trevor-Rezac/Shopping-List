const SUPABASE_URL = 'https://cszyzoknequiketsibzc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUxMzg0MSwiZXhwIjoxOTU3MDg5ODQxfQ.hcNN4nRH1boN4C_kZsmI-wyirMeThYfYfjLYwK9_iXA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createItem(item, quantity) {
    const response = await client
        .from('shopping_list')
        .insert([{
            item,
            quantity
        }]);
    
    return checkError(response);
}

export async function getItems() {
    const response = await client
        .from('shopping_list')
        .select()
        .order('purchased');
    
    return checkError(response);
}

export async function purchaseItem(itemID) {
    const response = await client
        .from('shopping_list')
        .update({ purchased: true })
        .match({ id: itemID });

    return checkError(response);
}

export async function undoPurchase(itemID) {
    const response = await client
        .from('shopping_list')
        .update({ purchased: false })
        .match({ id: itemID });
    
    return checkError(response);
}

export async function deleteItems() {
    const response = await client
        .from('shopping_list')
        .delete();

    return checkError(response);
}

export async function clearPurchasedItem() {
    const response = await client
        .from('shopping_list')
        .delete()
        .match({ purchased: true });

    return checkError(response);
}

export async function removeItem(itemID) {
    const response = await client
        .from('shopping_list')
        .delete()
        .match({ id: itemID });
    
    return checkError(response);
}

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./shoppingList');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
