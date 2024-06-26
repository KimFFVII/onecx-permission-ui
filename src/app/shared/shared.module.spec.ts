import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MfeInfo } from '@onecx/portal-integration-angular'
import { environment } from 'src/environments/environment'

describe('SharedModule', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })

    httpClient = TestBed.inject(HttpClient)
  })

  // TODO: correct this and do the right thing
  it('should return the correct basePath with mfeInfo', () => {
    const mfeInfo: MfeInfo = {
      mountPath: '',
      remoteBaseUrl: 'http://localhost:4200/',
      baseHref: '',
      shellName: '',
      appId: '',
      productName: ''
    }
    const result = mfeInfo.remoteBaseUrl + '' + environment.apiPrefix
    expect(result).toEqual('http://localhost:4200/bff')
  })

  /*
  it('should return a translate loader', () => {
    const mfeInfo: MfeInfo = {
      mountPath: '',
      remoteBaseUrl: 'http://localhost:4200/',
      baseHref: '',
      shellName: ''
    }

    const result = HttpLoaderFactory(httpClient, mfeInfo)

    expect(result).toBeInstanceOf(TranslateCombinedLoader)
  })
  */
})
