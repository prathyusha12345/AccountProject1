using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using YourNamespace;

namespace UserAccountWebApiService.Controllers
{
    public class UserAccountController : ApiController
    {
        AccountRepository accountRepository = new AccountRepository();
        // GET: api/UserAccount
        public IEnumerable<UserAccount> Get()
        {

            return accountRepository.GetAll();
            
        }

        // GET: api/UserAccount/5
        public UserAccount Get(int id)
        {
            
            return accountRepository.GetAll().Where(x => x.Id == id).Single();
        }

        // POST: api/UserAccount
        public void Post(UserAccount user)
        {
            //if(!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            //UserAccount u=
                accountRepository.Add(user);
            //return Ok(u);
        }

        // PUT: api/UserAccount/5
        public void Put(UserAccount user)
        {
            accountRepository.Update(user);
        }

        // DELETE: api/UserAccount/5
        public void Delete(int id)
        {
            accountRepository.Remove(id);
        }
    }
}
