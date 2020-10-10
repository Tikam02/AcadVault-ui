import { request } from "@octokit/request";

const url = 'https://api.github.com';
const content = async() =>{
    try{
     const {data: {commit: {commit: {tree: {sha}}}}} = 
      await request('GET /repos/Tikam02/AcadVault/branches/master', {
       baseUrl: url,
       accept: 'application/vnd.github.v3+json',
       owner: 'Tikam02',
       repo: 'AcadVault',
       branch: 'master'
     });
      return sha;
    }
    catch(error){
       console.log(error);
    }
}


export const getTree = async() => {
    const tree_sha = await content();

    try{
       const {data: {tree}} = await request(`GET /repos/Tikam02/AcadVault/git/trees/${tree_sha}`, {
        baseUrl: url,
        accept: 'application/vnd.github.v3+json',
        owner: 'Tikam02',
        repo: 'AcadVault',
        tree_sha: tree_sha,
        recursive:'true'
       });
       return tree;
    }
    catch(error){
        console.log(error);
    }
}

