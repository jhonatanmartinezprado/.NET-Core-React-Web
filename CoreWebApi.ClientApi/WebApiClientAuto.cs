//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DemoWebApi.Controllers.Client
{
    
    
    /// <summary>
    /// Complex hero type
    /// </summary>
    public class Hero : object
    {
        
        private long _Id;
        
        private string _Name;
        
        public long Id
        {
            get
            {
                return _Id;
            }
            set
            {
                _Id = value;
            }
        }
        
        public string Name
        {
            get
            {
                return _Name;
            }
            set
            {
                _Name = value;
            }
        }
    }
}
namespace CoreWebApi.Controllers.Client
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System.Net.Http;
    using Newtonsoft.Json;
    
    
    public partial class Values
    {
        
        private System.Net.Http.HttpClient client;
        
        private System.Uri baseUri;
        
        public Values(System.Net.Http.HttpClient client, System.Uri baseUri)
        {
            if (client == null)
                throw new ArgumentNullException("client", "Null HttpClient.");

            if (baseUri == null)
                throw new ArgumentNullException("baseUri", "Null baseUri");

            this.client = client;
            this.baseUri = baseUri;
        }
        
        /// <summary>
        /// GET api/Values
        /// </summary>
        public async Task<string[]> GetAsync()
        {
            var requestUri = new Uri(this.baseUri, "api/Values");
            var responseMessage = await client.GetAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<string[]>(jsonReader);
            }
        }
        
        /// <summary>
        /// GET api/Values
        /// </summary>
        public string[] Get()
        {
            var requestUri = new Uri(this.baseUri, "api/Values");
            var responseMessage = this.client.GetAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<string[]>(jsonReader);
            }
        }
        
        /// <summary>
        /// GET api/Values/{id}
        /// </summary>
        public async Task<string> GetAsync(int id)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/"+id);
            var responseMessage = await client.GetAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            return jsonReader.ReadAsString();
            }
        }
        
        /// <summary>
        /// GET api/Values/{id}
        /// </summary>
        public string Get(int id)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/"+id);
            var responseMessage = this.client.GetAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            return jsonReader.ReadAsString();
            }
        }
        
        /// <summary>
        /// POST api/Values
        /// </summary>
        public async Task PostAsync(string value)
        {
            var requestUri = new Uri(this.baseUri, "api/Values");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, value);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync(requestUri, content);
            responseMessage.EnsureSuccessStatusCode();
            }
        }
        
        /// <summary>
        /// POST api/Values
        /// </summary>
        public void Post(string value)
        {
            var requestUri = new Uri(this.baseUri, "api/Values");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, value);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = this.client.PostAsync(requestUri, content).Result;
            responseMessage.EnsureSuccessStatusCode();
            }
        }
        
        /// <summary>
        /// PUT api/Values/{id}
        /// </summary>
        public async Task PutAsync(int id, string value)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/"+id);
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, value);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = await client.PutAsync(requestUri, content);
            responseMessage.EnsureSuccessStatusCode();
            }
        }
        
        /// <summary>
        /// PUT api/Values/{id}
        /// </summary>
        public void Put(int id, string value)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/"+id);
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, value);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = this.client.PutAsync(requestUri, content).Result;
            responseMessage.EnsureSuccessStatusCode();
            }
        }
        
        /// <summary>
        /// DELETE api/Values/{id}
        /// </summary>
        public async Task DeleteAsync(int id)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/"+id);
            var responseMessage = await client.DeleteAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// DELETE api/Values/{id}
        /// </summary>
        public void Delete(int id)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/"+id);
            var responseMessage = this.client.DeleteAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// POST api/Values/template
        /// </summary>
        public async Task<string> GenerateTemplateAsync(string tips)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/template");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, tips);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync(requestUri, content);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            return jsonReader.ReadAsString();
            }
            }
        }
        
        /// <summary>
        /// POST api/Values/template
        /// </summary>
        public string GenerateTemplate(string tips)
        {
            var requestUri = new Uri(this.baseUri, "api/Values/template");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, tips);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = this.client.PostAsync(requestUri, content).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            return jsonReader.ReadAsString();
            }
            }
        }
    }
}
namespace DemoWebApi.Controllers.Client
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System.Net.Http;
    using Newtonsoft.Json;
    
    
    public partial class Heroes
    {
        
        private System.Net.Http.HttpClient client;
        
        private System.Uri baseUri;
        
        public Heroes(System.Net.Http.HttpClient client, System.Uri baseUri)
        {
            if (client == null)
                throw new ArgumentNullException("client", "Null HttpClient.");

            if (baseUri == null)
                throw new ArgumentNullException("baseUri", "Null baseUri");

            this.client = client;
            this.baseUri = baseUri;
        }
        
        /// <summary>
        /// Get all heroes.
        /// GET api/Heroes
        /// </summary>
        public async Task<DemoWebApi.Controllers.Client.Hero[]> GetAsync()
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes");
            var responseMessage = await client.GetAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero[]>(jsonReader);
            }
        }
        
        /// <summary>
        /// Get all heroes.
        /// GET api/Heroes
        /// </summary>
        public DemoWebApi.Controllers.Client.Hero[] Get()
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes");
            var responseMessage = this.client.GetAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero[]>(jsonReader);
            }
        }
        
        /// <summary>
        /// Get a hero.
        /// GET api/Heroes/{id}
        /// </summary>
        public async Task<DemoWebApi.Controllers.Client.Hero> GetAsync(long id)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/"+id);
            var responseMessage = await client.GetAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
        }
        
        /// <summary>
        /// Get a hero.
        /// GET api/Heroes/{id}
        /// </summary>
        public DemoWebApi.Controllers.Client.Hero Get(long id)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/"+id);
            var responseMessage = this.client.GetAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
        }
        
        /// <summary>
        /// DELETE api/Heroes/{id}
        /// </summary>
        public async Task DeleteAsync(long id)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/"+id);
            var responseMessage = await client.DeleteAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// DELETE api/Heroes/{id}
        /// </summary>
        public void Delete(long id)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/"+id);
            var responseMessage = this.client.DeleteAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
        }
        
        /// <summary>
        /// Add a hero
        /// POST api/Heroes/q?name={name}
        /// </summary>
        public async Task<DemoWebApi.Controllers.Client.Hero> PostWithQueryAsync(string name)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/q?name="+Uri.EscapeDataString(name));
            var responseMessage = await client.PostAsync(requestUri, new StringContent(String.Empty));
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
        }
        
        /// <summary>
        /// Add a hero
        /// POST api/Heroes/q?name={name}
        /// </summary>
        public DemoWebApi.Controllers.Client.Hero PostWithQuery(string name)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/q?name="+Uri.EscapeDataString(name));
            var responseMessage = this.client.PostAsync(requestUri, new StringContent(String.Empty)).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
        }
        
        /// <summary>
        /// POST api/Heroes
        /// </summary>
        public async Task<DemoWebApi.Controllers.Client.Hero> PostAsync(string name)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, name);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync(requestUri, content);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
            }
        }
        
        /// <summary>
        /// POST api/Heroes
        /// </summary>
        public DemoWebApi.Controllers.Client.Hero Post(string name)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, name);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = this.client.PostAsync(requestUri, content).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
            }
        }
        
        /// <summary>
        /// Update hero.
        /// PUT api/Heroes
        /// </summary>
        public async Task<DemoWebApi.Controllers.Client.Hero> PutAsync(DemoWebApi.Controllers.Client.Hero hero)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, hero);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = await client.PutAsync(requestUri, content);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
            }
        }
        
        /// <summary>
        /// Update hero.
        /// PUT api/Heroes
        /// </summary>
        public DemoWebApi.Controllers.Client.Hero Put(DemoWebApi.Controllers.Client.Hero hero)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes");
            using (var requestWriter = new System.IO.StringWriter())
            {
            var requestSerializer = JsonSerializer.Create();
            requestSerializer.Serialize(requestWriter, hero);
            var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
            var responseMessage = this.client.PutAsync(requestUri, content).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero>(jsonReader);
            }
            }
        }
        
        /// <summary>
        /// Search heroes
        /// GET api/Heroes/{name}
        /// </summary>
        /// <param name="name">keyword contained in hero name.</param>
        /// <returns>Hero array matching the keyword.</returns>
        public async Task<DemoWebApi.Controllers.Client.Hero[]> SearchAsync(string name)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/"+Uri.EscapeDataString(name));
            var responseMessage = await client.GetAsync(requestUri);
            responseMessage.EnsureSuccessStatusCode();
            var stream = await responseMessage.Content.ReadAsStreamAsync();
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero[]>(jsonReader);
            }
        }
        
        /// <summary>
        /// Search heroes
        /// GET api/Heroes/{name}
        /// </summary>
        /// <param name="name">keyword contained in hero name.</param>
        /// <returns>Hero array matching the keyword.</returns>
        public DemoWebApi.Controllers.Client.Hero[] Search(string name)
        {
            var requestUri = new Uri(this.baseUri, "api/Heroes/"+Uri.EscapeDataString(name));
            var responseMessage = this.client.GetAsync(requestUri).Result;
            responseMessage.EnsureSuccessStatusCode();
            var stream = responseMessage.Content.ReadAsStreamAsync().Result;
            using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
            {
            var serializer = new JsonSerializer();
            return serializer.Deserialize<DemoWebApi.Controllers.Client.Hero[]>(jsonReader);
            }
        }
    }
}
